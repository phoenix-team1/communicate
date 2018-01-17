// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var commonpack = commonpack || {};

/**
 * @const
 * @namespace
 */
var userpack = userpack || {};

/**
 * @constructor
 */
userpack.T_GET_USERINFO = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {userpack.T_GET_USERINFO}
 */
userpack.T_GET_USERINFO.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {userpack.T_GET_USERINFO=} obj
 * @returns {userpack.T_GET_USERINFO}
 */
userpack.T_GET_USERINFO.getRootAsT_GET_USERINFO = function(bb, obj) {
  return (obj || new userpack.T_GET_USERINFO).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {flatbuffers.Long}
 */
userpack.T_GET_USERINFO.prototype.userId = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
userpack.T_GET_USERINFO.prototype.userName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
userpack.T_GET_USERINFO.prototype.nickName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
userpack.T_GET_USERINFO.prototype.mobile = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 */
userpack.T_GET_USERINFO.startT_GET_USERINFO = function(builder) {
  builder.startObject(4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} userId
 */
userpack.T_GET_USERINFO.addUserId = function(builder, userId) {
  builder.addFieldInt64(0, userId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} userNameOffset
 */
userpack.T_GET_USERINFO.addUserName = function(builder, userNameOffset) {
  builder.addFieldOffset(1, userNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} nickNameOffset
 */
userpack.T_GET_USERINFO.addNickName = function(builder, nickNameOffset) {
  builder.addFieldOffset(2, nickNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} mobile
 */
userpack.T_GET_USERINFO.addMobile = function(builder, mobile) {
  builder.addFieldInt64(3, mobile, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
userpack.T_GET_USERINFO.endT_GET_USERINFO = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
userpack.T_GET_USERLST_INFO_RS = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {userpack.T_GET_USERLST_INFO_RS}
 */
userpack.T_GET_USERLST_INFO_RS.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {userpack.T_GET_USERLST_INFO_RS=} obj
 * @returns {userpack.T_GET_USERLST_INFO_RS}
 */
userpack.T_GET_USERLST_INFO_RS.getRootAsT_GET_USERLST_INFO_RS = function(bb, obj) {
  return (obj || new userpack.T_GET_USERLST_INFO_RS).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RS_HEAD=} obj
 * @returns {commonpack.S_RS_HEAD}
 */
userpack.T_GET_USERLST_INFO_RS.prototype.sRsHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RS_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {number} index
 * @param {userpack.T_GET_USERINFO=} obj
 * @returns {userpack.T_GET_USERINFO}
 */
userpack.T_GET_USERLST_INFO_RS.prototype.userLstInfo = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? (obj || new userpack.T_GET_USERINFO).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
userpack.T_GET_USERLST_INFO_RS.prototype.userLstInfoLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {flatbuffers.Long}
 */
userpack.T_GET_USERLST_INFO_RS.prototype.userNoLst = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint64(this.bb.__vector(this.bb_pos + offset) + index * 8) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
userpack.T_GET_USERLST_INFO_RS.prototype.userNoLstLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint64Array}
 */
userpack.T_GET_USERLST_INFO_RS.prototype.userNoLstArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? new Uint64Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
userpack.T_GET_USERLST_INFO_RS.startT_GET_USERLST_INFO_RS = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRsHeadOffset
 */
userpack.T_GET_USERLST_INFO_RS.addSRsHead = function(builder, sRsHeadOffset) {
  builder.addFieldStruct(0, sRsHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} userLstInfoOffset
 */
userpack.T_GET_USERLST_INFO_RS.addUserLstInfo = function(builder, userLstInfoOffset) {
  builder.addFieldOffset(1, userLstInfoOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
userpack.T_GET_USERLST_INFO_RS.createUserLstInfoVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
userpack.T_GET_USERLST_INFO_RS.startUserLstInfoVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} userNoLstOffset
 */
userpack.T_GET_USERLST_INFO_RS.addUserNoLst = function(builder, userNoLstOffset) {
  builder.addFieldOffset(2, userNoLstOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Long>} data
 * @returns {flatbuffers.Offset}
 */
userpack.T_GET_USERLST_INFO_RS.createUserNoLstVector = function(builder, data) {
  builder.startVector(8, data.length, 8);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt64(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
userpack.T_GET_USERLST_INFO_RS.startUserNoLstVector = function(builder, numElems) {
  builder.startVector(8, numElems, 8);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
userpack.T_GET_USERLST_INFO_RS.endT_GET_USERLST_INFO_RS = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
userpack.T_GET_USERLST_INFO_RS.finishT_GET_USERLST_INFO_RSBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.userpack = userpack;