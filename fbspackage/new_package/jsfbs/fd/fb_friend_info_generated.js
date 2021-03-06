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
friendpack.T_FREIND_INFO = function() {
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
 * @returns {friendpack.T_FREIND_INFO}
 */
friendpack.T_FREIND_INFO.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {friendpack.T_FREIND_INFO=} obj
 * @returns {friendpack.T_FREIND_INFO}
 */
friendpack.T_FREIND_INFO.getRootAsT_FREIND_INFO = function(bb, obj) {
  return (obj || new friendpack.T_FREIND_INFO).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {flatbuffers.Long}
 */
friendpack.T_FREIND_INFO.prototype.userId = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
friendpack.T_FREIND_INFO.prototype.sourceType = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt8(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
friendpack.T_FREIND_INFO.prototype.remarkName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
friendpack.T_FREIND_INFO.prototype.opMsg = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
friendpack.T_FREIND_INFO.prototype.optType = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
friendpack.T_FREIND_INFO.prototype.blackType = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @returns {flatbuffers.Long}
 */
friendpack.T_FREIND_INFO.prototype.opTime = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 */
friendpack.T_FREIND_INFO.startT_FREIND_INFO = function(builder) {
  builder.startObject(7);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} userId
 */
friendpack.T_FREIND_INFO.addUserId = function(builder, userId) {
  builder.addFieldInt64(0, userId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} sourceType
 */
friendpack.T_FREIND_INFO.addSourceType = function(builder, sourceType) {
  builder.addFieldInt8(1, sourceType, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} remarkNameOffset
 */
friendpack.T_FREIND_INFO.addRemarkName = function(builder, remarkNameOffset) {
  builder.addFieldOffset(2, remarkNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} opMsgOffset
 */
friendpack.T_FREIND_INFO.addOpMsg = function(builder, opMsgOffset) {
  builder.addFieldOffset(3, opMsgOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} optType
 */
friendpack.T_FREIND_INFO.addOptType = function(builder, optType) {
  builder.addFieldInt32(4, optType, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} blackType
 */
friendpack.T_FREIND_INFO.addBlackType = function(builder, blackType) {
  builder.addFieldInt32(5, blackType, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} opTime
 */
friendpack.T_FREIND_INFO.addOpTime = function(builder, opTime) {
  builder.addFieldInt64(6, opTime, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
friendpack.T_FREIND_INFO.endT_FREIND_INFO = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
friendpack.T_FREIND_INFO.finishT_FREIND_INFOBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.friendpack = friendpack;
