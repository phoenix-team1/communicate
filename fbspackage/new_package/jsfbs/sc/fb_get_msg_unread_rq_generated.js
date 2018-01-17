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
var scpack = scpack || {};

/**
 * @constructor
 */
scpack.T_GET_MSG_UNREAD_RQ = function() {
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
 * @returns {scpack.T_GET_MSG_UNREAD_RQ}
 */
scpack.T_GET_MSG_UNREAD_RQ.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {scpack.T_GET_MSG_UNREAD_RQ=} obj
 * @returns {scpack.T_GET_MSG_UNREAD_RQ}
 */
scpack.T_GET_MSG_UNREAD_RQ.getRootAsT_GET_MSG_UNREAD_RQ = function(bb, obj) {
  return (obj || new scpack.T_GET_MSG_UNREAD_RQ).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RQ_HEAD=} obj
 * @returns {commonpack.S_RQ_HEAD}
 */
scpack.T_GET_MSG_UNREAD_RQ.prototype.sRqHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RQ_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {number} index
 * @returns {flatbuffers.Long}
 */
scpack.T_GET_MSG_UNREAD_RQ.prototype.listBId = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint64(this.bb.__vector(this.bb_pos + offset) + index * 8) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
scpack.T_GET_MSG_UNREAD_RQ.prototype.listBIdLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint64Array}
 */
scpack.T_GET_MSG_UNREAD_RQ.prototype.listBIdArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? new Uint64Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
scpack.T_GET_MSG_UNREAD_RQ.startT_GET_MSG_UNREAD_RQ = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRqHeadOffset
 */
scpack.T_GET_MSG_UNREAD_RQ.addSRqHead = function(builder, sRqHeadOffset) {
  builder.addFieldStruct(0, sRqHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} listBIdOffset
 */
scpack.T_GET_MSG_UNREAD_RQ.addListBId = function(builder, listBIdOffset) {
  builder.addFieldOffset(1, listBIdOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Long>} data
 * @returns {flatbuffers.Offset}
 */
scpack.T_GET_MSG_UNREAD_RQ.createListBIdVector = function(builder, data) {
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
scpack.T_GET_MSG_UNREAD_RQ.startListBIdVector = function(builder, numElems) {
  builder.startVector(8, numElems, 8);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
scpack.T_GET_MSG_UNREAD_RQ.endT_GET_MSG_UNREAD_RQ = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
scpack.T_GET_MSG_UNREAD_RQ.finishT_GET_MSG_UNREAD_RQBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.scpack = scpack;
