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
var friendpack = friendpack || {};

/**
 * @constructor
 */
friendpack.T_FRIEND_SERVER_DEL_RS = function() {
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
 * @returns {friendpack.T_FRIEND_SERVER_DEL_RS}
 */
friendpack.T_FRIEND_SERVER_DEL_RS.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {friendpack.T_FRIEND_SERVER_DEL_RS=} obj
 * @returns {friendpack.T_FRIEND_SERVER_DEL_RS}
 */
friendpack.T_FRIEND_SERVER_DEL_RS.getRootAsT_FRIEND_SERVER_DEL_RS = function(bb, obj) {
  return (obj || new friendpack.T_FRIEND_SERVER_DEL_RS).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RS_HEAD=} obj
 * @returns {commonpack.S_RS_HEAD}
 */
friendpack.T_FRIEND_SERVER_DEL_RS.prototype.sRsHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RS_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
friendpack.T_FRIEND_SERVER_DEL_RS.startT_FRIEND_SERVER_DEL_RS = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRsHeadOffset
 */
friendpack.T_FRIEND_SERVER_DEL_RS.addSRsHead = function(builder, sRsHeadOffset) {
  builder.addFieldStruct(0, sRsHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
friendpack.T_FRIEND_SERVER_DEL_RS.endT_FRIEND_SERVER_DEL_RS = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
friendpack.T_FRIEND_SERVER_DEL_RS.finishT_FRIEND_SERVER_DEL_RSBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.friendpack = friendpack;
